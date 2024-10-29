# TYPESCRIPT

new-ts:
	cp ./src/template-ts/sketch.ts ./src/sketches/${NAME}.ts

open-ts:
	npx canvas-sketch-cli src/sketches/${NAME}.ts --open --html src/template/index.html -- -p [ tsify --noImplicitAny ]
	# npx canvas-sketch-cli src/sketches/${NAME}.ts --open --html src/template/index.html -- -p [ tsify --noImplicitAny ]

build-ts:
	npx canvas-sketch-cli src/sketches/${NAME}.ts --build --dir "./dist/${NAME}" -- -p [ tsify --noImplicitAny ]
	# npx canvas-sketch-cli src/sketches/${NAME}.ts --build --inline --dir "./dist/${NAME}" -- -p [ tsify --noImplicitAny ]

# JAVASCRIPT

new:
	npx canvas-sketch-cli src/sketches/${NAME}.js --new --html src/template/index.html

open:
	npx canvas-sketch-cli src/sketches/${NAME}.js --open --html src/template/index.html

build:
	npx canvas-sketch-cli src/sketches/${NAME}.ts --build --dir "./dist/${NAME}"

check:
	npx @biomejs/biome check --write .

serve:
	npx serve dist