import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

import Button from '@material-ui/core/Button';

storiesOf('Button', module)
    .add('with text', () =>
        <div>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="test">
          href, do not click
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="fab" mini>
          Mini
        </Button>
        </div>
    )
;
