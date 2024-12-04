"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Please enter a valid date in YYYY-MM-DD format.",
  }),
  birthTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Please enter a valid time in HH:MM format.",
  }),
  birthPlace: z.string().min(2, {
    message: "Birth place must be at least 2 characters.",
  }),
});

export function BirthDetailsForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      birthDate: "",
      birthTime: "",
      birthPlace: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Here you would typically send the data to your backend or smart contract
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Birth details submitted",
        description: "Your natal chart is being generated.",
      });
    }, 2000);
  }

  return (
    <Card className="bg-white/50 backdrop-blur-sm border-[#755E99]/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-[#BC81DA] text-lg">
          Enter Your Birth Details
        </CardTitle>
        <CardDescription className="text-[#755E99] text-sm">
          Provide accurate information for the best results
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#755E99] text-sm">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="bg-white/50 border-[#755E99]/20 text-[#755E99]"
                    />
                  </FormControl>
                  <FormDescription className="text-[#755E99]/80 text-xs">
                    This is how you'll be identified in the app.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Birth Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal text-[#755E99] bg-white/50 border-[#755E99]/20",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className=""
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#755E99] text-sm">
                    Birth Time
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="time"
                      placeholder="HH:MM"
                      {...field}
                      className="bg-white/50 border-[#755E99]/20  text-[#755E99]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthPlace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#755E99] text-sm">
                    Birth Place
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City, Country"
                      {...field}
                      className="bg-white/50 border-[#755E99]/20 text-[#755E99]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#BC81DA] hover:bg-[#BC81DA]/80 text-white"
            >
              {isLoading ? "Generating..." : "Generate Natal Chart"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
