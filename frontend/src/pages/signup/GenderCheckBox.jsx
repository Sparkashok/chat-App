import { motion } from 'framer-motion';

const GenderCheckbox = () => {
	return (
		<div className='flex mt-1.5 space-x-1.5'>
			<motion.div 
				className='form-control'
				whileHover={{ scale: 1.05 }}
			>
				<label className='label gap-2 cursor-pointer'>
					<span className='label-text'>Male</span>
					<motion.input 
						type='checkbox' 
						className='checkbox border-white-900' 
						whileTap={{ scale: 0.9 }}
					/>
				</label>
			</motion.div>
			<motion.div 
				className='form-control'
				whileHover={{ scale: 1.05 }}
			>
				<label className='label gap-2 cursor-pointer'>
					<span className='label-text'>Female</span>
					<motion.input 
						type='checkbox' 
						className='checkbox border-white-900' 
						whileTap={{ scale: 0.9 }}
					/>
				</label>
			</motion.div>
		</div>
	);
};

export default GenderCheckbox;