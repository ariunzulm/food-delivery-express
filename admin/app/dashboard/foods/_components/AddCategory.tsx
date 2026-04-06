"use client";

import { ChangeEventHandler, useState } from "react";
import { LoaderCircle, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Category } from "@/app/lib/types/categoriesTypes";

const AddCategory = () => {
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewCategory(event.target.value);
  };

  const onAddCategory = async () => {
    setLoading(true);

    const postBody = {
      categoryName: newCategory,
    };
    console.log(postBody, "body");

    try {
      await fetch("https://food-delivery-server-wdw6.onrender.com/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex items-center cursor-pointer gap-1 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-medium px-2 py-1.5 rounded-full transition-all duration-150">
          <Plus />
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md p-4">
        <DialogHeader>
          <DialogTitle className="uppercase">Add new category</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="categoryName" className="">
                Category name
              </Label>
              <Input
                onChange={onChange}
                type="text"
                id="categoryName"
                placeholder="Type your category name"
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button
            onClick={onAddCategory}
            disabled={loading}
            type="button"
            className="flex items-center cursor-pointer gap-1 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Add Category"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddCategory;
