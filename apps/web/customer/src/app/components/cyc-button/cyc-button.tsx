import styles from './cyc-button.module.less'

const CycButton = (props: { disabled: boolean; onClick: () => void; value: string }) => {
    const buttonClass = props.disabled ? "" : styles.buttonEnabled

    const onClick = () => {
        props.onClick()
    }
    return (
        <div>
            <input type="Button" className={`${buttonClass} ${styles.continueButton }`} value={props.value} onClick={onClick}/>
        </div>
    )
}
export default CycButton
