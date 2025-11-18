import type { FC } from "react";
import TextField from "@mui/material/TextField";

type SearchBarProps = {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <div className="w-full max-w-md">
      <TextField
        fullWidth
        label="Search products"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={onChange}
        className="
          bg-white rounded-xl shadow-sm
          transition
          hover:shadow-md
        "
      />
    </div>
  );
};
