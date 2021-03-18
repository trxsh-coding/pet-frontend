import React from "react";
import ReusableInput from "../../../../../Reusable/Input";

const Personal = () => {
		return (
				<div>
						<ReusableInput
								placeholder='Поиск'
								value={value}
								children=' '
								onChange={onChange}
								action={() => action(value)}
						/>
						<ReusableInput
								placeholder='Поиск'
								value={value}
								children=' '
								onChange={onChange}
								action={() => action(value)}
						/>
				</div>
		)
}

export default Personal;