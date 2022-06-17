import classes from "./Tab.module.css";
const Tab = (props) => {
	return <div className={classes.tab}>{props.children}</div>;
};
export default Tab;
