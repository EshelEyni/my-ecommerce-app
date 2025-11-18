import type { FC } from "react";
import TextField from "@mui/material/TextField";

type SearchBarProps = {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <TextField
      label="Search products"
      variant="outlined"
      size={"small"}
      value={searchTerm}
      onChange={onChange}
    />
  );
};
