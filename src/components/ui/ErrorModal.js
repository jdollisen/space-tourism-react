import classes from "../css/errorModal.module.scss"
import { Button } from "../ui/Button"

export const ErrorModal = (props) => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h3>{props.title}</h3>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <div>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </div>
            </div>
        </div>
    )
}