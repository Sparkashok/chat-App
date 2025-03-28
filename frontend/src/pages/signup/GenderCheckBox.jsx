import { motion } from 'framer-motion';

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
	return (
		<div className='flex mt-1.5 space-x-1.5'>
			<motion.div 
				className='form-control'
				whileHover={{ scale: 1.05 }}
			>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
					<span className='label-text'>Male</span>
					<motion.input 
						type='checkbox' 
						className='checkbox border-white-900' 
						whileTap={{ scale: 0.9 }}
						checked={selectedGender === "male"}
						onChange={()=> onCheckboxChange("male")}
					/>
				</label>
			</motion.div>
			<motion.div 
				className='form-control'
				whileHover={{ scale: 1.05 }}
			>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<motion.input 
						type='checkbox' 
						className='checkbox border-white-900' 
						whileTap={{ scale: 0.9 }}
						checked={selectedGender === "female"}
						onChange={()=> onCheckboxChange("female")}
					/>
				</label>
			</motion.div>
		</div>
	);
};

export default GenderCheckbox;