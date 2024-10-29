CMD="npx canvas-sketch-cli"
TEMPLATE="--html src/template/index.html"
TSIFY="-- -p [ tsify --noImplicitAny ]"
# TYPESCRIPT

new-ts:
	cp ./src/template-ts/sketch.ts ./src/sketches/${NAME}.ts

open-ts:
	${CMD} src/sketches/${NAME}.ts --open ${TEMPLATE} ${TSIFY}
	# ${CMD} src/sketches/${NAME}.ts --open ${TEMPLATE} ${TSIFY}

build-ts:
	${CMD} src/sketches/${NAME}.ts --build ${TEMPLATE} --dir "./dist/${NAME}" ${TSIFY}
	# ${CMD} src/sketches/${NAME}.ts --build ${TEMPLATE} --inline --dir "./dist/${NAME}" ${TSIFY}

# JAVASCRIPT

new:
	${CMD} src/sketches/${NAME}.js --new ${TEMPLATE}

open:
	${CMD} src/sketches/${NAME}.js --open ${TEMPLATE}

build:
	${CMD} src/sketches/${NAME}.js --build ${TEMPLATE} --dir "./dist/${NAME}"

# UTILS

check:
	npx @biomejs/biome check --write .

serve:
	npx serve dist