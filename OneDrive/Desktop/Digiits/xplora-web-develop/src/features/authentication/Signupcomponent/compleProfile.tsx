import { Button } from "@/components/ui/button";
import Icon from '@/assets/icons/complete-profile-icon.svg';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthHeader from "@/components/shared/AuthHeader";

// Validation schema
const Schema = z.object({
  selectedCategories: z.array(z.string()).min(3, { message: "Please select at least 3 topics to continue." })
});

// Define the form type
type FormData = z.infer<typeof Schema>;

const CompleteProfile = () => {
  const [selectCategories, setSelectCategories] = useState<number[]>([]);

  const { handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      selectedCategories: [] // Default empty array for selected categories
    }
  });

  const categories = [
    "Music",
    "Business",
    "TED Talks",
    "Movies",
    "Comedy",
    "Cooking",
    "Cryptocurrency",
    "Art",
    "Concert", 
    "Data Science",
    "Programming",
    "Gaming",
    "Money",
    "Fiction",
    "Sports",
    "Fashion",
    "Theater",
    "Literature",
  ];

  // Handle category selection
  const handleClick = (index: number) => {
    const selectedCategoryIndexes = selectCategories.includes(index)
      ? selectCategories.filter((i) => i !== index)
      : [...selectCategories, index];

    setSelectCategories(selectedCategoryIndexes);

    // Get the selected categories' labels
    const selectedCategoryLabels = selectedCategoryIndexes.map((i) => categories[i]);
    
    // Update the form value
    setValue("selectedCategories", selectedCategoryLabels);
  };

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center ">
      <AuthHeader/>
      <div className="bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl">
        <img src={Icon} alt="Xplore" className="" />
        <h1 className="font-roboto lg:text-left mt-4 lg:2xl font-bold text-2xl">What would you like to see on your Xplora feed</h1>
        <p className="font-sfpro lg:text-left text-gry text-sm mb-4">Select at least 3 topics to customize your community profile and get started</p>


        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 space-y-4 space-x-2">
            {categories.map((category, index) => (
              <Button
                onClick={() => handleClick(index)}
                key={index}
                className={`rounded-full bg-gray-100 hover:bg-purple ${selectCategories.includes(index) ? 'text-white bg-purple' : 'text-black purple'}`}
              >
                {category}
              </Button>
            ))}
          </div>
           {errors.selectedCategories && (
          <p className="text-red-500 mb-4 text-xs">{errors.selectedCategories.message}</p>
        )}

          <button type="submit" className="rounded-full p-4 bg-purple text-center w-full text-white">
            Continue
          </button>
        </form>

      </div>
    </div>
  );
};

export default CompleteProfile;
