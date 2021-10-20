import styles from './cycButton.module.less'

const CycButton = (props: { disabled: boolean; value: string }) => {
    const buttonClass = props.disabled ? "" : styles.buttonEnabled
    return (
        <div>
            <input type="Button" className={`${buttonClass} ${styles.continueButton }`} value={props.value} />
        </div>
    )
}
export default CycButton
