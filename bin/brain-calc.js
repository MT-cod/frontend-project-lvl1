#!/usr/bin/env node

import * as index from '../src/index.js';
import run from '../games/brain-calc.js';

const name = index.greeting();

index.threeTry(run, name);
