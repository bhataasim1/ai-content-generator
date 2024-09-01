import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const LoadingDialog = ({ loading }: { loading: boolean }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col items-center p-10">
          <AlertDialogTitle>
            Hold on, your course will be generated soon!!!!
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Image
              src={"/rocket.gif"}
              alt="loading"
              width={100}
              height={100}
              priority
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoadingDialog;
