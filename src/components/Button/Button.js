import css from './Button.module.css';

function Button({children,onClick}) {
    return (
        <div className={css.Button} onClick={onCLick}>
            {children}
        </div>
    )
}

export {Button};