"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import { createProduct } from "../_actions/createProduct";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/utils/zodSchemas";
import Image from "next/image";
import { getCategories } from "../_actions/getCategories";
import ButtonSubmitProductForm from "@/components/products/ButtonSubmitProductForm";

type Props = {};

const NewProductPage: React.FC<Props> = ({}) => {
  const [images, setImages] = React.useState<string[]>([]);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDelete = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  React.useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight ">New product</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Add your product details below. Make sure to add a high-quality
            image and detailed description to attract more customers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                placeholder="Enter product name"
                className="w-full"
              />
              <p className="text-rose-500">{fields.name.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
                placeholder="Write a detailed description"
              />
              <p className="text-rose-500">{fields.description.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                type="number"
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={fields.price.initialValue}
                placeholder="$55"
                className="w-full"
              />
              <p className="text-rose-500">{fields.price.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Featured product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultValue={fields.isFeatured.initialValue}
              />
              <p className="text-rose-500">{fields.isFeatured.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={fields.status.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DRAFT">Draft</SelectItem>
                  <SelectItem value="PUBLISHED">Published</SelectItem>
                  <SelectItem value="ARCHIVED">Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-rose-500">{fields.status.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Category</Label>
              <Select
                key={fields.categoryId.key}
                name={fields.categoryId.name}
                defaultValue={fields.categoryId.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-rose-500">{fields.categoryId.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue as any}
              />
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((image, index) => (
                    <div key={index} className="relative w-[100px] h-[100px]">
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="Product Image"
                        className="w-full h-full object-cover rounded-lg border"
                      />
                      <button
                        className="absolute -top-3 -right-3 bg-rose-500 p-2 rounded-lg text-white"
                        onClick={() => handleDelete(index)}
                      >
                        <XIcon className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"imageUploader"}
                  onClientUploadComplete={(res) => {
                    console.log("Uploaded");
                    console.log("Files: ", res);
                    setImages(res.map((file) => file.url));
                  }}
                  onUploadError={(error: Error) => {
                    console.error(`ERROR! ${error.message}`);
                  }}
                />
              )}
              <p className="text-rose-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <ButtonSubmitProductForm text="New Product" />
        </CardFooter>
      </Card>
    </form>
  );
};

export default NewProductPage;
