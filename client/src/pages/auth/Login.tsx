import { z } from "zod";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoaderCircle, Lock, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormSeparator, Input, InputPassword } from "@/components/ui/form";
import { Google } from "@/icons/socials";
import { loginSchema } from "@/validation/authSchema";
import { useAuth } from "@/contexts/AuthContext";

type FormFields = z.infer<typeof loginSchema>;

export default function Login() {
   const location = useLocation();
   const nevigate = useNavigate();
   const { user, isAuthenticating, signInWithEmail, signInWithGoogle } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormFields>({ resolver: zodResolver(loginSchema) });

   const redirect = () => nevigate(location.state || "/");
   const onSubmit: SubmitHandler<FormFields> = (data) => {
      signInWithEmail(data, redirect);
   };

   useEffect(() => {
      if (user) nevigate("/");
   }, [nevigate, user]);

   return (
      <section className="p-4 min-h-screen bg-secondary flex-center">
         <div className="max-w-lg w-full shadow-xl rounded-lg border bg-muted">
            <Card className="shadow-none border-0">
               <CardHeader className="justify-items-center gap-y-3">
                  <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                  <CardDescription className="text-center font-medium">
                     Welcome! Please fill in the details to get started.
                  </CardDescription>
               </CardHeader>
               <CardContent className="grid gap-y-6">
                  <div>
                     <Button
                        onClick={() => signInWithGoogle(redirect)}
                        variant="outline"
                        className="w-full h-11 gap-x-3 text-sm text-secondary-foreground"
                     >
                        <Google />
                        <span>Login in with google</span>
                     </Button>
                  </div>

                  <FormSeparator>Or continue with</FormSeparator>

                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="mb-8 grid w-full items-center gap-y-3">
                        <Input
                           {...register("email")}
                           placeholder="Enter email"
                           error={errors.email}
                           startIcon={<User className="size-4 text-muted-foreground" />}
                        />

                        <InputPassword
                           {...register("password")}
                           placeholder="Enter password"
                           error={errors.password}
                           startIcon={<Lock className="size-4 text-muted-foreground" />}
                        />
                     </div>

                     <Button className="w-full gap-x-3">
                        {isAuthenticating && <LoaderCircle className="size-5 animate-spin" />}
                        <span>Login</span>
                     </Button>
                  </form>
               </CardContent>
            </Card>

            <div className="px-3 py-5 flex-center gap-x-2 text-sm">
               <span>Don't have an account?</span>
               <Link to="/register" className="text-primary font-medium">
                  Create one
               </Link>
            </div>
         </div>
      </section>
   );
}
