import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1">
                    {label}
                </label>
            )}

            <Editor
                apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                initialValue={defaultValue}
                init={{
                    height: 400,
                    menubar: true,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic | alignleft aligncenter " +
                        "alignright alignjustify | " +
                        "bullist numlist outdent indent | " +
                        "removeformat | help",
                }}
            />
        </div>
    );
}

export default RTE;