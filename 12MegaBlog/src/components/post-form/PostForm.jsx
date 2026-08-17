import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        getValues,
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        try {
            console.log("FORM DATA:", data);

            // UPDATE POST
            if (post) {
                let file = null;

                if (data.image && data.image[0]) {
                    console.log("Uploading new image...");

                    file = await appwriteService.uploadFile(data.image[0]);

                    if (!file) {
                        throw new Error("Image upload failed");
                    }

                    console.log("Image uploaded:", file);

                    await appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(
                    post.$id,
                    {
                        ...data,
                        featuredImage: file
                            ? file.$id
                            : post.featuredImage,
                    }
                );

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }

                return;
            }

            // CREATE NEW POST
            if (!data.image || !data.image[0]) {
                throw new Error("Please select a featured image");
            }

            console.log("Uploading image...");

            const file = await appwriteService.uploadFile(
                data.image[0]
            );

            if (!file) {
                throw new Error("Image upload failed");
            }

            console.log("Image uploaded successfully:", file);

            const fileId = file.$id;

            const dbPost = await appwriteService.createPost({
                ...data,
                featuredImage: fileId,
                userId: userData?.$id,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } catch (error) {
            console.error("Post submit error:", error);
            alert(error.message || "Something went wrong");
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue(
                    "slug",
                    slugTransform(value.title),
                    {
                        shouldValidate: true,
                    }
                );
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-wrap"
        >
            <div className="w-2/3 px-2">

                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", {
                        required: true,
                    })}
                />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", {
                        required: true,
                    })}
                    onInput={(e) => {
                        setValue(
                            "slug",
                            slugTransform(e.currentTarget.value),
                            {
                                shouldValidate: true,
                            }
                        );
                    }}
                />

                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />

            </div>

            <div className="w-1/3 px-2">

                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png,image/jpg,image/jpeg,image/gif"
                    {...register("image", {
                        required: !post,
                    })}
                />

                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(
                                post.featuredImage
                            )}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", {
                        required: true,
                    })}
                />

                <Button
                    type="submit"
                    bgColor={
                        post
                            ? "bg-green-500"
                            : undefined
                    }
                    className="w-full"
                >
                    {post ? "Update" : "Submit"}
                </Button>

            </div>
        </form>
    );
}