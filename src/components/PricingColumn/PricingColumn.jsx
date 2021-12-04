import React from 'react';
import { string, bool } from 'prop-types';
import Button from '../Button';
import './PricingColumn.scss';

const PricingColumn = ({
	className,
	children,
	title,
	subtitle,
	price,
	featured,
	lookupKey,
	name,
	id,
	onClick,
	value,
	...rest
}) => {
	return (
		<label
			className={`PricingColumn ${value ? 'selected' : ''}  ${
				featured && 'featured'
			}`}
			htmlFor={id}
			{...rest}
		>
			<input
				hidden
				type="radio"
				name={name}
				id={id}
				selected={value}
				onClick={onClick}
			/>
			<div className={`${className} ${featured && 'featured'}`}>
				<h2 className="h5">{title}</h2>
				<h3 className="h2">{price}</h3>
				<h4>{subtitle}</h4>
				<div className="pricing-content">{children}</div>
				<form>
					<input type="hidden" name="lookup_key" value={lookupKey} />

					<Button
						variant={value ? 'secondary' : 'inactive-ghosted'}
						disabled={!value}
						size="small"
						type="submit"
					>
						Get Started
					</Button>
				</form>
			</div>
		</label>
	);
};

export default PricingColumn;

PricingColumn.propTypes = {
	className: string,
	title: string.isRequired,
	subtitle: string,
	price: string,
	featured: bool,
	lookupKey: string.isRequired,
	id: string.isRequired,
};

PricingColumn.defaultProps = {
	className: '',
	subtitle: '',
	price: '',
	featured: false,
};
