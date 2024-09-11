import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaTrashAlt } from "react-icons/fa";
import DeleteAlertDialog from "./DeleteAlertDialog";
import { useState } from "react";

type DropDownOptionsProps = {
  children: React.ReactNode;
  handleDeleteCourse: () => void;
};

const DropDownOptions = ({
  children,
  handleDeleteCourse,
}: DropDownOptionsProps) => {
  const [openDeleteAlertDialog, setOpenDeleteAlertDialog] = useState(false);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setOpenDeleteAlertDialog(true)}
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteAlertDialog
        open={openDeleteAlertDialog}
        setIsOpen={setOpenDeleteAlertDialog}
        handleDeleteCourse={handleDeleteCourse}
      />
    </div>
  );
};

export default DropDownOptions;
