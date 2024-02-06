"use client";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState, useMemo } from "react";
import axios from "axios";
import { storage } from "@/app/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Page() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [aiubIdValue, setAiubIdValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState(new Set([]));
  const [academicYearValue, setAcademicYearValue] = useState(new Set([]));
  const [completedCreditsValue, setCompletedCreditsValue] = useState("");
  const [currentCgpaValue, setCurrentCgpaValue] = useState("");
  const [isIeeeMemberValue, setIsIeeeMemberValue] = useState("");
  const [ieeeMembershipIdValue, setIeeeMembershipIdValue] = useState("");
  const [affiliationWithOtherOrgValue, setAffiliationWithOtherOrgValue] = useState("");
  const [bloodGroupValue, setBloodGroupValue] = useState(new Set([]));
  const [genderValue, setGenderValue] = useState(new Set([]));
  const [addressValue, setAddressValue] = useState("");
  const [facebookValue, setFacebookValue] = useState("");
  const [linkedinValue, setLinkedinValue] = useState("");
  const [portfolioValue, setPortfolioValue] = useState("");
  const [positionValue, setPositionValue] = useState(new Set([]));
  const [previousVolunteeringExperience, setPreviousVolunteeringExperience] = useState("");
  const [qualificationValue, setQualificationValue] = useState("");
  const [whyJoinIeee, setWhyJoinIeee] = useState("");
  const [resumeValue, setResumeValue] = useState(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [photoValue, setPhotoValue] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");

  const isNameInvalid = useMemo(() => {
    return (name) => {
      if (name === "") return false;
      return name.match(/^[A-Za-z]+$/) ? false : true;
    };
  });

  const isEmailInvalid = useMemo(() => {
    if (emailValue === "") return false;
    return emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
      ? false
      : true;
  });

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isPhoneInvalid = useMemo(() => {
    if (phoneValue === "") return false;
    return phoneValue.match(/^(01|\+8801)[3-9][0-9]{8}$/) ? false : true;
  });

  const isAiubIdInvalid = useMemo(() => {
    if (aiubIdValue === "") return false;
    return aiubIdValue.match(/^(1[0-9]|2[0-4])-\d{5}-[1-3]$/) ? false : true;
  });

  const isCompletedCreditsInvalid = useMemo(() => {
    if (completedCreditsValue == "") return false;
    return completedCreditsValue.match(/^([0-9]|[1-9][0-9]|1[0-5][0-9]|160)$/)
      ? false
      : true;
  });

  const isCurrentCgpaInvalid = useMemo(() => {
    if (currentCgpaValue == "") return false;
    return currentCgpaValue.match(/^[0-3](\.\d{1,2})?$|^4(\.0{1,2})?$/)
      ? false
      : true;
  });

  // const isPhotoInvalid = useMemo(() => {
  //   if (photoValue == null) return false;
  //   const photoExtension = photoValue.slice(((photoValue.lastIndexOf(".") - 2) >>> 0) + 2);
  //   console.log(photoExtension);
  //   return photoExtension.match(/(png|jpe?g|webp)$/i) ? false : true;
  // });

  const [departmentTouched, setDepartmentTouched] = useState(false);
  const [academicYearTouched, setAcademicYearTouched] = useState(false);
  const [bloodGroupTouched, setBloodGroupTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [positionTouched, setPositionTouched] = useState(false);
  const [isIeeeMemberTouched, setIsIeeeMemberTouched] = useState(false);

  const fileExtension = (file)=>file.type.slice(((file.name.lastIndexOf("/")+1)));

  const isFormValid = () => {
    return (
      !isNameInvalid(firstNameValue) &&
      !isNameInvalid(lastNameValue) &&
      isEmailInvalid &&
      !isPhoneInvalid &&
      !isAiubIdInvalid &&
      departmentValue.size > 0 &&
      academicYearValue.size > 0 &&
      !isCompletedCreditsInvalid &&
      bloodGroupValue.size > 0 &&
      genderValue.size > 0 &&
      positionValue.size > 0
    );
  };

  const submitform = async (e) => {
    e.preventDefault();
    console.log("submitting form");
    // if (!isFormValid()) {
    //   console.log("form is not valid");
    //   return;
    // }

    const imageRef = ref(storage, "images/" + firstNameValue + lastNameValue + "_" + aiubIdValue);
    uploadBytes(imageRef, photoValue).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setPhotoUrl(url);
        console.log(photoUrl);
      });
    });
    // console.log(data);
    const resumeRef = ref(storage, "resumes/" + firstNameValue + lastNameValue + "_" + aiubIdValue);
    uploadBytes(resumeRef, resumeValue).then(() => {
      getDownloadURL(resumeRef).then((url) => {
        setResumeUrl(url);
        console.log(resumeUrl);
      });
    });

    const data = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      bloodGroup: Array.from(bloodGroupValue)[0],
      gender: Array.from(genderValue)[0],
      aiubId: aiubIdValue,
      department: Array.from(departmentValue)[0],
      academicYear: Array.from(academicYearValue)[0],
      currentCgpa: currentCgpaValue,
      completedCredits: completedCreditsValue,
      address: addressValue,
      facebook: facebookValue,
      linkedin: linkedinValue,
      position: Array.from(positionValue)[0],
      portfolio: portfolioValue,
      isIeeeMember: Array.from(isIeeeMemberValue)[0],
      ieeeMembershipId: ieeeMembershipIdValue,
      affiliationWithOtherOrg: affiliationWithOtherOrgValue,
      previousVolunteeringExperience: previousVolunteeringExperience,
      qualification: qualificationValue,
      whyJoinIeee: whyJoinIeee,
      resume: resumeUrl,
      photo: photoUrl,
      year: 2024,
    };

    const response = await axios.post("https://ieeeaiubsb.pockethost.io/api/collections/volunteer_recruitment/records", data);
    if(response.status == 200){
      alert("Form Submitted Successfully");
    }
    console.log(response);
  };

  return (
    <div className=" overflow-y-hidden grid place-items-center bg-gray-200">
      <div className="lg:max-w-2xl max-w-screen-sm w-full">
        <form
          id="volunteer-recruitment-form"
          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl my-6 sm:my-8"
          onSubmit={submitform}
        >
          <div className="text-4xl w-full text-center pt-16 text-gray-600 font-semibold">
            Volunteer Recruitment 2024
          </div>
          <div className="px-4 py-6 sm:p-8 grid place-items-center">
            <div className="max-w-md w-full">
              <div className="">
                {/* <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label> */}
                <div className="mt-2 w-full grid grid-cols-2 gap-2">
                  <Input
                    isRequired
                    isClearable
                    value={firstNameValue}
                    type="text"
                    label="First Name"
                    variant="bordered"
                    isInvalid={isNameInvalid(firstNameValue)}
                    color={isNameInvalid(firstNameValue) ? "danger" : "content"}
                    errorMessage={
                      isNameInvalid(firstNameValue) &&
                      "Please enter a valid name"
                    }
                    onValueChange={setFirstNameValue}
                    className="w-full pb-0"
                  />
                  <Input
                    isRequired
                    isClearable
                    value={lastNameValue}
                    type="text"
                    label="Last Name"
                    variant="bordered"
                    isInvalid={isNameInvalid(lastNameValue)}
                    color={isNameInvalid(lastNameValue) ? "danger" : "content"}
                    errorMessage={
                      isNameInvalid(lastNameValue) &&
                      "Please enter a valid name"
                    }
                    onValueChange={setLastNameValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={emailValue}
                    type="email"
                    label="Email"
                    variant="bordered"
                    isInvalid={isEmailInvalid}
                    color={isEmailInvalid ? "danger" : "content"}
                    errorMessage={
                      isEmailInvalid && "Please enter a valid email"
                    }
                    onValueChange={setEmailValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={phoneValue}
                    type="text"
                    label="Phone"
                    variant="bordered"
                    isInvalid={isPhoneInvalid}
                    color={isPhoneInvalid ? "danger" : "content"}
                    errorMessage={
                      isPhoneInvalid && "Please enter a valid phone number"
                    }
                    onValueChange={setPhoneValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Select
                  isRequired
                  label="Blood Group"
                  variant="bordered"
                  placeholder="Select a Blood Group"
                  errorMessage={
                    bloodGroupTouched && bloodGroupValue.size == 0
                      ? "You must select a Blood Group"
                      : ""
                  }
                  isInvalid={
                    bloodGroupTouched && bloodGroupValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={bloodGroupValue}
                  className="w-full"
                  onSelectionChange={setBloodGroupValue}
                  onClose={() => setBloodGroupTouched(true)}
                >
                  <SelectItem key={"A+"} value={"A+"}>
                    {"A Positive (A+)"}
                  </SelectItem>
                  <SelectItem key={"A-"} value={"A-"}>
                    {"A Negative (A-)"}
                  </SelectItem>
                  <SelectItem key={"B+"} value={"B+"}>
                    {"B Positive (B+)"}
                  </SelectItem>
                  <SelectItem key={"B-"} value={"B-"}>
                    {"B Negative (B-)"}
                  </SelectItem>
                  <SelectItem key={"AB+"} value={"AB+"}>
                    {"AB Positive (AB+)"}
                  </SelectItem>
                  <SelectItem key={"AB-"} value={"AB-"}>
                    {"AB Negative (AB-)"}
                  </SelectItem>
                  <SelectItem key={"O+"} value={"O+"}>
                    {"O Positive (O+)"}
                  </SelectItem>
                  <SelectItem key={"O-"} value={"O-"}>
                    {"O Negative (O-)"}
                  </SelectItem>
                </Select>

                <Select
                  isRequired
                  label="Gender"
                  variant="bordered"
                  placeholder="Select a Gender"
                  errorMessage={
                    genderTouched && genderValue.size == 0
                      ? "You must select a Gender"
                      : ""
                  }
                  isInvalid={
                    genderTouched && genderValue.size == 0 ? true : false
                  }
                  selectedKeys={genderValue}
                  className="w-full"
                  onSelectionChange={setGenderValue}
                  onClose={() => setGenderTouched(true)}
                >
                  <SelectItem key={"Male"} value={"Male"}>
                    {"Male"}
                  </SelectItem>
                  <SelectItem key={"Female"} value={"Female"}>
                    {"Female"}
                  </SelectItem>
                </Select>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={aiubIdValue}
                    type="text"
                    label="AIUB ID"
                    variant="bordered"
                    isInvalid={isAiubIdInvalid}
                    color={isAiubIdInvalid ? "danger" : "content"}
                    errorMessage={
                      isAiubIdInvalid && "Please enter a valid email"
                    }
                    onValueChange={setAiubIdValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Select
                  isRequired
                  label="Department"
                  variant="bordered"
                  placeholder="Select a Department"
                  errorMessage={
                    departmentValue.size == 0 && departmentTouched
                      ? "You must select a department"
                      : ""
                  }
                  isInvalid={
                    departmentTouched && departmentValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={departmentValue}
                  className="w-full"
                  onSelectionChange={setDepartmentValue}
                  onClose={() => setDepartmentTouched(true)}
                >
                  <SelectItem key={"CSE"} value={"CSE"}>
                    {"CSE"}
                  </SelectItem>
                  <SelectItem key={"EEE"} value={"EEE"}>
                    {"EEE"}
                  </SelectItem>
                  <SelectItem key={"IPE"} value={"IPE"}>
                    {"CSE"}
                  </SelectItem>
                  <SelectItem key={"Architecture"} value={"Architecture"}>
                    {"Architecture"}
                  </SelectItem>
                </Select>

                <Select
                  isRequired
                  label="Academic Year"
                  variant="bordered"
                  placeholder="Select an Academic Year"
                  errorMessage={
                    academicYearTouched && academicYearValue.size == 0
                      ? "You must select an academic year"
                      : ""
                  }
                  isInvalid={
                    academicYearTouched && academicYearValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={academicYearValue}
                  className="max-w-xs"
                  onSelectionChange={setAcademicYearValue}
                  onClose={() => setAcademicYearTouched(true)}
                >
                  <SelectItem key={"1st"} value={"1st"}>
                    {"1st"}
                  </SelectItem>
                  <SelectItem key={"2nd"} value={"2nd"}>
                    {"2nd"}
                  </SelectItem>
                  <SelectItem key={"3rd"} value={"3rd"}>
                    {"3rd"}
                  </SelectItem>
                  <SelectItem key={"4th"} value={"4th"}>
                    {"4th"}
                  </SelectItem>
                </Select>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Input
                  isRequired
                  isClearable
                  value={currentCgpaValue}
                  type="text"
                  label="Current CGPA"
                  variant="bordered"
                  isInvalid={isCurrentCgpaInvalid}
                  color={isCurrentCgpaInvalid ? "danger" : "content"}
                  errorMessage={
                    isCurrentCgpaInvalid && "Please enter a valid CGPA"
                  }
                  onValueChange={setCurrentCgpaValue}
                  className="w-full"
                />
                <Input
                  isClearable
                  isRequired
                  value={completedCreditsValue}
                  type="text"
                  label="Completed Credits"
                  variant="bordered"
                  isInvalid={
                    completedCreditsValue.length > 0 &&
                    isCompletedCreditsInvalid
                  }
                  color={
                    completedCreditsValue.length > 0 &&
                    isCompletedCreditsInvalid
                      ? "danger"
                      : "content"
                  }
                  errorMessage={
                    completedCreditsValue.length > 0 &&
                    isCompletedCreditsInvalid
                      ? "Please enter a valid email"
                      : ""
                  }
                  onValueChange={setCompletedCreditsValue}
                  className="w-full"
                />
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={addressValue}
                    type="text"
                    label="Address"
                    variant="bordered"
                    onValueChange={setAddressValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={facebookValue}
                    type="text"
                    label="Facebook"
                    variant="bordered"
                    onValueChange={setFacebookValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={linkedinValue}
                    type="text"
                    label="Linkedin"
                    variant="bordered"
                    onValueChange={setLinkedinValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Select
                    isRequired
                    label="Which position do you want apply?"
                    variant="bordered"
                    placeholder="Select an Position"
                    errorMessage={
                      positionTouched && positionValue.size == 0
                        ? "You must select a position"
                        : ""
                    }
                    isInvalid={
                      positionTouched && positionValue.size == 0 ? true : false
                    }
                    selectedKeys={positionValue}
                    className="w-full"
                    onSelectionChange={setPositionValue}
                    onClose={() => setPositionTouched(true)}
                  >
                    <SelectItem
                      key={"Event Management"}
                      value={"Event Management"}
                    >
                      {"Event Management"}
                    </SelectItem>
                    <SelectItem key={"Logistics"} value={"Logistics"}>
                      {"Logistics"}
                    </SelectItem>
                    <SelectItem key={"Publications"} value={"Publications"}>
                      {"Publications"}
                    </SelectItem>
                    <SelectItem
                      key={"Website Development"}
                      value={"Website Development"}
                    >
                      {"Website Development"}
                    </SelectItem>
                    <SelectItem
                      key={"Public Relation"}
                      value={"Public Relation"}
                    >
                      {"Public Relation"}
                    </SelectItem>
                    <SelectItem key={"Video Editor"} value={"Video Editor"}>
                      {"Video Editor"}
                    </SelectItem>
                    <SelectItem
                      key={"Photojournalist"}
                      value={"Photojournalist"}
                    >
                      {"Photojournalist"}
                    </SelectItem>
                    <SelectItem
                      key={"WIE (Women in Engineering)"}
                      value={"WIE (Women in Engineering)"}
                    >
                      {"WIE (Women in Engineering)"}
                    </SelectItem>
                    <SelectItem
                      key={"Graphics Designer"}
                      value={"Graphics Designer"}
                    >
                      {"Graphics Designer"}
                    </SelectItem>
                  </Select>
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isClearable
                    value={portfolioValue}
                    type="text"
                    label="Portfolio"
                    variant="bordered"
                    onValueChange={setPortfolioValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Select
                  isRequired
                  label="Are You an IEEE Member?"
                  variant="bordered"
                  placeholder="Yes/No"
                  errorMessage={
                    isIeeeMemberTouched && isIeeeMemberValue.size == 0
                      ? "You must select an option"
                      : ""
                  }
                  isInvalid={
                    isIeeeMemberTouched && isIeeeMemberValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={isIeeeMemberValue}
                  className="w-full"
                  onSelectionChange={setIsIeeeMemberValue}
                  onClose={() => setIsIeeeMemberTouched(true)}
                >
                  <SelectItem key={"Yes"} value={"Yes"}>
                    {"Yes"}
                  </SelectItem>
                  <SelectItem key={"No"} value={"No"}>
                    {"No"}
                  </SelectItem>
                </Select>

                <Input
                  isRequired
                  isClearable
                  value={ieeeMembershipIdValue}
                  type="text"
                  label="IEEE Membership ID"
                  variant="bordered"
                  onValueChange={setIeeeMembershipIdValue}
                  className="w-full"
                />
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={2500}
                    isInvalid={false}
                    value={affiliationWithOtherOrgValue}
                    variant="bordered"
                    label="Are you associated with any other volunteering clubs/organizations? (Even outside of AIUB)?"
                    placeholder="Mentions your affiliations with other volunteering organizations/clubs. If none, write 'None'."
                    minRows={3}
                    classNames={{
                      base: "w-full",
                      input: "resize-y",
                    }}
                    onValueChange={setAffiliationWithOtherOrgValue}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={1200}
                    isInvalid={false}
                    value={previousVolunteeringExperience}
                    variant="bordered"
                    label="Describe your previous volunteering experience (Max 1200 characters)"
                    placeholder="Enter your description"
                    defaultValue=""
                    errorMessage={
                      previousVolunteeringExperience.length >= 1200
                        ? "The description should be at max 1200 Characters."
                        : ""
                    }
                    minRows={3}
                    classNames={{
                      base: "w-full",
                      input: "resize-y ",
                    }}
                    onValueChange={setPreviousVolunteeringExperience}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={2500}
                    isInvalid={false}
                    value={qualificationValue}
                    variant="bordered"
                    label="What qualifies you, in your opinion, for “IEEE AIUB Student Branch” as a volunteer?"
                    placeholder="Enter your description"
                    defaultValue=""
                    errorMessage={
                      qualificationValue.length >= 2500
                        ? "The description should be at max 2500 Characters."
                        : ""
                    }
                    minRows={3}
                    classNames={{
                      base: "w-full",
                      input: "resize-y",
                    }}
                    onValueChange={setQualificationValue}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={2000}
                    isInvalid={false}
                    value={whyJoinIeee}
                    variant="bordered"
                    label="Why do you want to join “ IEEE AIUB Student Branch ” as a volunteer? (Max 2000 Characters)"
                    placeholder="Enter your description"
                    defaultValue=""
                    onValueChange={setWhyJoinIeee}
                    errorMessage={
                      whyJoinIeee.length >= 2000
                        ? "The description should be at max 2000 words."
                        : ""
                    }
                    classNames={{
                      base: "w-full",
                      input: "resize-y min-h-[40px]",
                    }}
                  />
                </div>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <label
                  htmlFor="photoUpload"
                  className="bg-white text-black text-base rounded w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                >
                  <input
                    type="file"
                    id="photoUpload"
                    className="hidden"
                    onChange={(e) => setPhotoValue(e.target.files[0])}
                  />
                  {photoValue ? (
                    <div className="relative rounded-sm overflow-clip w-full p-2 gap-2 grid place-items-center">
                      {console.log(photoValue)}
                      <img
                        className=" rounded-md overflow-clip object-cover max-h-[150px]"
                        src={URL.createObjectURL(photoValue)}
                      />
                      <div className="text-center text-gray-600 text-xs px-2 text-wrap">
                        {photoValue.name}
                      </div>
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 mb-2 fill-black"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                          data-original="#000000"
                        />
                        <path
                          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                          data-original="#000000"
                        />
                      </svg>
                      <p className="text-gray-600">Upload a Photo</p>
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        PNG, JPG SVG, WEBP, and GIF are Allowed.
                      </p>
                      <p className="text-xs text-red-500 mt-2 mx-2 text-center">
                        Invalid File format.
                      </p>
                    </>
                  )}
                </label>

                <label
                  htmlFor="resumeUpload"
                  className="bg-white text-black text-base rounded w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                >
                  <input
                    type="file"
                    id="resumeUpload"
                    className="hidden"
                    onChange={(e) => setResumeValue(e.target.files[0])}
                  />
                  {resumeValue ? (
                    <div className="relative rounded-sm overflow-clip w-full p-2 gap-2 flex flex-col justify-center items-center">
                      {console.log(resumeValue)}
                      <svg
                        height="80"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#4b5563"
                          d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        />
                      </svg>
                      <div className="text-center text-gray-600 text-xs text-clip px-2 max-w-[200px] overf">
                        {resumeValue.name}
                      </div>
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 mb-2 fill-black"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                          data-original="#000000"
                        />
                        <path
                          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                          data-original="#000000"
                        />
                      </svg>
                      <p className="text-gray-600">Upload CV/Resume</p>
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        PNG, JPG SVG, WEBP, and GIF are Allowed.
                      </p>
                      <p className="text-xs text-red-500 mt-2 mx-2 text-center">
                        Invalid File format.
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
