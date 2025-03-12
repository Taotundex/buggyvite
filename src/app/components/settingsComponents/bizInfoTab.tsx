import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

interface BizInfoForm {
    headline?: String;
    profilePic?: String;
    yourBio?: String;
    location?: String;
    timeZone?: String;
    skills?: [];
}

const BizInfoTab = () => {
    const [inputValue, setInputValue] = useState('');
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [selectedModerators, setSelectedModerators] = useState<Array>(["Favour", "Ade", "Web Development", "Ayom", "Mayokun", "UI/UX Design"]);
    const colors = ["green-500", "stone-500", "yellow-500", "blue-500", "red-500", "orange-500", "fuchsia-500", "cyan-500", "sky-500", "violet-500", "neutral-600"]
    const [bgColor, setBgColor] = useState<String>("indigo-500")

    const formik = useFormik<BizInfoForm>({
        initialValues: {
            headline: "",
            profilePic: "",
            yourBio: "",
            location: "",
            timeZone: "",
            skills: []
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            try{

            } catch (error: any) {
                console.error(error)
            } finally {
                setTimeout(() => {
                   setSubmitting(false)
                   resetForm() 
                }, 3000);
            }
        },
    })

    // const handleModeratorSelect = (moderator: any) => {
	// 	if (!selectedModerators.some((m) => m.email === moderator.email)) {
	// 		const newSelectedModerators = [...selectedModerators, moderator];
	// 		setSelectedModerators(newSelectedModerators);
	// 		formik.setFieldValue('moderators', newSelectedModerators.map((m) => m.email));
	// 	}
	// 	setInputValue('');
	// };

	const handleSkillRemoval = (moderator: String) => {
		const updatedModerators = selectedModerators.filter((m: String) => m !== moderator);
		setSelectedModerators(updatedModerators);
	};

    const handleSkillAddition = (inputValue: String) => {
        if (inputValue.length <= 0) {
            setIsEmpty(true)
            setTimeout(() => {
                setIsEmpty(false)
            }, 2000);
            return;
        }

        const newSkill = [...selectedModerators, inputValue]
        setSelectedModerators(newSkill)
        // console.log(selectedModerators)
        // if (event.key === "Enter") {
            //     event.preventDefault();
            // }
    };

    useEffect(() => {
        console.log(inputValue)
        const randomClr = Math.floor(Math.random()*colors.length);
        // console.log("randomClr", randomClr)
        setBgColor(`${colors[randomClr]}`);
        // console.log("bgColor", bgColor)
    }, [selectedModerators])


    return(
        <div className="md:px-10 md:py-8 p-5 border border-[#282828] rounded-[10px]">
            <div className="flex flex-col md:gap-10 gap-3">
                <form action="" method="post" className='flex flex-col md:gap-5 gap-6 md:pb-10 pb-5 border-b border-[#282828]'>
                    <label htmlFor="headline" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span className='leading-[16px]'>Headline <small className='md:text-sm block text-xs font-normal'>Leave an impression</small></span>
                        <input type="type" name="headline" id="headline" placeholder='e. g. Tech Enthusiast' className='input input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="profilePic" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span className='leading-[16px]'>Profile Picture <small className='md:text-sm block text-xs font-normal'>Upload your headshot</small></span>
                        <input type="file" name="profilePic" id="profilePic" placeholder='e. g. Tech Enthusiast' className='file-input file-input-bordered h-12 rounded-lg md:w-[500px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="yourBio" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span className='leading-[16px]'>Bio <small className='md:text-sm block text-xs font-normal'>Tell your hirers a bit about yourself and what you do.</small></span>
                        <textarea name="yourBio" id="yourBio" placeholder='What are you on about?!' className='textarea textarea-bordered leading-tight resize-none md:w-[500px] min-h-[150px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="location" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span className='leading-[16px]'>Location <small className='md:text-sm block text-xs font-normal'>Your location will be visible on your profile. Helps maximise reach.</small></span>
                        <input type="type" name="location" id="location" placeholder='State, Country' className='input input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="timeZone" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span>Time Zone</span>
                        <input type="type" name="timeZone" id="timeZone" placeholder='e. g. (UTC+01:00) West Central Africa' className='input input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="skills" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span>Your Skills</span>
                        <div className="flex flex-col items-end justify-end md:w-[500px] w-full">
                            <div className="mb-3 md:w-[500px] flex flex-wrap justify-end gap-3">
                                {selectedModerators.map((moderator: String, index: any) => (
                                    <small
                                        key={index}
                                        className={`flex gap-2 items-center text-xs py-2 px-3 rounded-lg bg-${bgColor} border-2 border-background shadow-md shadow-purple text-background overflow-hidden max-w-[150px]`}
                                    >
                                        <span className='w-4/5 whitespace-nowrap overflow-clip'>
                                            {moderator}
                                        </span>
                                        <button
                                            title='Delete Skill'
                                            className="text-white"
                                            type='button'
                                            onClick={() => handleSkillRemoval(moderator)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </small>
                                ))}
                            </div>
                            <div className={`input pe-0 input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB] flex items-center justify-between ${isEmpty ? "input-error" : null}`}>
                                <input
                                    className="border-0 w-full input p-0" 
                                    id='skills'
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Add your skills here..."
                                    />
                                <button 
                                    className='bg-purple h-full w-[50px] text-background rounded-md flex justify-center items-center'
                                    type='button'
                                    onClick={() => handleSkillAddition(inputValue)}
                                >
                                    <FaPlus className='size-6' />
                                </button>
                            </div>
                        </div>
                        {/* {inputValue && filteredModerators.length > 0 && (
                            <ul className="shadow-md rounded-md max-h-40 overflow-y-auto">
                                {filteredModerators.map((moderator) => (
                                    <li
                                        key={moderator.email}
                                        className="p-2 hover:bg-gray-400 hover:text-accent-black cursor-pointer"
                                        onClick={() => handleModeratorSelect(moderator)}
                                    >
                                        {moderator.firstname} ({moderator.email})
                                    </li>
                                ))}
                            </ul>
                        )} */}
                    </label>
                    <button 
                        type='submit'
                        className={`btn md:w-fit w-full px-10 h-[50px] mt-5 border-none bg-[#796FAB] text-white rounded-[5px] ml-auto ${formik.isSubmitting ? "cursor-disabled" : null}`}
                        disabled={formik.isSubmitting}
                    >
                        {
                            formik.isSubmitting ? "Saving Info..." : "Save Information"
                        }
                    </button>
                </form>
            </div>
        </div>
    )

}

export default BizInfoTab