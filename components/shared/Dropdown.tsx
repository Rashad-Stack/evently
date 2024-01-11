import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { useState } from "react";

type DropdownProps = {
  onChangeHandler?: () => void;
  value?: string;
};

export default function Dropdown({ onChangeHandler, value }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category: ICategory) => (
            <SelectItem key={category._id} value={category._id}>
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
