import React, { FC, useState } from 'react';
import styles from "./styles.module.css";

const FormHandling: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submitted: ${inputValue}`);
    }

    const handleEmailClick = () => {
        const email = 'damanellorekarthik@gmail.com';
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        alert(`Copied email address: ${email}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.formInputStyles}
                />
                <button type='submit' className={styles.formButtonStyles}>Submit</button>
                <p className={styles.highlightedText} onClick={handleEmailClick}>contact:damanellorekarthik</p>
            </form>
        </div>
    );
}

export default FormHandling;
