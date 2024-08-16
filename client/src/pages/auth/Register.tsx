import { z } from "zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, InputPassword } from "@/components/ui/form";
import { registrationSchema } from "@/validation/authSchema";
import { useAuth } from "@/contexts/AuthContext";

type FormFields = z.infer<typeof registrationSchema>;

export default function Register() {
   const nevigate = useNavigate();
   const { user, isAuthenticating, createAccount } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormFields>({ resolver: zodResolver(registrationSchema) });

   const redirect = () => nevigate("/");
   const onSubmit: SubmitHandler<FormFields> = ({ fname, lname, ...data }) => {
      createAccount({ name: fname + " " + lname, ...data }, redirect);
   };

   useEffect(() => {
      if (user) nevigate("/");
   }, [nevigate, user]);

   return (
      <section className="p-4 min-h-screen bg-secondary flex-center">
         <div className="max-w-lg w-full shadow-xl rounded-lg border bg-muted">
            <Card className="shadow-none border-0">
               <CardHeader className="justify-items-center gap-y-3">
                  <CardTitle className="text-2xl font-bold text-center">
                     Create an account
                  </CardTitle>
                  <CardDescription className="text-center font-medium">
                     Welcome! Please fill in the details to get started.
                  </CardDescription>
               </CardHeader>
               <CardContent className="grid gap-y-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="mb-8 grid w-full items-center gap-5">
                        <div className="flex gap-5 flex-wrap">
                           <Input
                              {...register("fname")}
                              label="First name"
                              placeholder="Enter first name"
                              error={errors.fname}
                           />
                           <Input
                              {...register("lname")}
                              label="Last name"
                              placeholder="Enter last name"
                              error={errors.lname}
                           />
                        </div>

                        <Input
                           {...register("email")}
                           type="email"
                           label="Email"
                           placeholder="Enter email"
                           error={errors.email}
                        />

                        <InputPassword
                           {...register("password")}
                           label="Password"
                           placeholder="Enter password"
                           error={errors.password}
                        />

                        <InputPassword
                           {...register("confirmPassword")}
                           label="Confirm Password"
                           placeholder="Enter password again"
                           error={errors.confirmPassword}
                        />
                     </div>

                     <Button className="w-full gap-x-3">
                        {isAuthenticating && <LoaderCircle className="size-5 animate-spin" />}
                        <span>Create account</span>
                     </Button>
                  </form>
               </CardContent>
            </Card>

            <div className="px-3 py-5 flex-center gap-x-2 text-sm">
               <span>Already have an account?</span>
               <Link to="/login" className="text-primary font-medium">
                  Sign in
               </Link>
            </div>
         </div>
      </section>
   );
}
