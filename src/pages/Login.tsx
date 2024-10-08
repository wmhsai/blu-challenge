

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ComboInput from '../components/inputs/ComboInput';
import { UseGetAllBlu } from '../hooks/UseBlu';
import { Facility } from '../types/LoanTypes';

const Login = () => {
    const { data } = UseGetAllBlu();
    const navigate = useNavigate()
    const { control, getValues, } = useForm();
    const [selectedFacilitiesOption, setSelectedFacilitiesOption] = useState({ name: "", value: 0 });
    const handleChangeFacilities = (newValue: string) => {
        const parsedValue = parseInt(newValue, 10);
        setSelectedFacilitiesOption({ name: "", value: isNaN(parsedValue) ? 0 : parsedValue });
        navigate('../home')
    };

    const allFacilitiesNames = [...new Set(data?.map((item: Facility) => ({
        name: item.name,
        value: Number(item.id)
    })) as Facility[])]
        .map(({ name, value }) => ({ name, value }));

    return (
        <section style={styles.MainWrapper}>
            <p style={{ color: "#3068fa", fontWeight: "bold" }}>ورود به سامانه تسهیلات</p>
            <form style={styles.FormWrapper}>
                <ComboInput
                    control={control}
                    options={allFacilitiesNames as { value: number; name: string; }[]}
                    selectedOption={getValues().facilities ?? selectedFacilitiesOption.name}
                    onChange={handleChangeFacilities}
                    name='facilities'
                    label='انتخاب تسهیلات'
                    required
                />
            </form>
        </section>
    )
}

export default Login;

const styles: Record<string, React.CSSProperties> = {
    MainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4rem"
    },
    FormWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}