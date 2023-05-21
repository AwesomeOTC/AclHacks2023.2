import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"font": "--lead",
	"margin": "20px",
	"user-select": "auto",
	"pointer-events": "auto"
};
const overrides = {};

const ButtonC = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		Give it a go now, if ye dare!
		{children}
	</Button>;
};

Object.assign(ButtonC, { ...Button,
	defaultProps,
	overrides
});
export default ButtonC;