import { motion } from 'framer-motion';
import GenderCheckbox from './GenderCheckBox';
const SignUp = () => {
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

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<motion.input 
							type='text' placeholder='John Doe' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<motion.input 
							type='text' placeholder='johndoe' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Password</span>
						</label>
						<motion.input
							type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<motion.input
							type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
							whileFocus={{ scale: 1.05 }}
						/>
					</div>

					<GenderCheckbox />

					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</a>

					<div>
						<motion.button 
							className='btn btn-block btn-sm mt-2 border text-green-500'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Sign Up
						</motion.button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};
export default SignUp;