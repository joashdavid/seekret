import styles from './text-area.module.less'
import FloatLabelTextarea from '../float-label-textarea/float-label-textarea'

const TextArea = (props: {
  onUserInput: (arg0: string) => void
  label: string
  name: string
  type: string
  value: string
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCurrentInput = (event: any) => {
    props.onUserInput(event.target.value)
  }

  return (
    <FloatLabelTextarea label={props.label} name={props.name} value={props.value}>
      <div>
        <textarea
          value={props.value}
          className={styles.textarea}
          onChange={getCurrentInput}
          spellCheck={false}
        />
      </div>
    </FloatLabelTextarea>
  )
}

export { TextArea }
