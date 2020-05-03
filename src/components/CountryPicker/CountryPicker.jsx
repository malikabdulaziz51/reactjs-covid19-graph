import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountriesData } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchCountries = async () => {
			setFetchedCountries(await fetchCountriesData());
		};

		fetchCountries();
	}, [setFetchedCountries]);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleCountryChange(e.target.value)}
			>
				<option value="">Global</option>
				{fetchedCountries.map((country, id) => (
					<option key={id} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
