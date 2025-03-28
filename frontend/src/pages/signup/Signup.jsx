import { motion } from 'framer-motion';
import GenderCheckbox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
	const [inputs,setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading,signup } = useSignup();

	const handleCheckboxChange = (gender) =>{
		setInputs({...inputs,gender})
	}
	const handleSubmit = async (e) =>{
		e.preventDefault();
		await signup(inputs);
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<motion.div 
				className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className='text-3xl font-semibold text-center text-white-700'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<motion.input 
							type='text' placeholder='John Doe' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
							value={inputs.fullName}
							onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<motion.input 
							type='text' placeholder='johndoe' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
							value={inputs.username}
							onChange={(e)=> setInputs({...inputs,username: e.target.value})}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Password</span>
						</label>
						<motion.input
							type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
							value={inputs.password}
							onChange={(e)=> setInputs({...inputs,password: e.target.value})}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<motion.input
							type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
							value={inputs.confirmPassword}
							onChange={(e)=> setInputs({...inputs,confirmPassword: e.target.value})}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<motion.button 
							className='btn btn-block btn-sm mt-2 border text-green-500'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</motion.button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};
export default SignUp;