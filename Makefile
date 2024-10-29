open:
	npx canvas-sketch src/sketches/${NAME}.ts --open -- -p [ tsify --noImplicitAny ]
	# --html src/template-ts/page.html

new:
	cp ./src/template-ts/sketch.ts ./src/sketches/${NAME}.ts

build:
	npx canvas-sketch src/sketches/${NAME}.ts --build --dir "./dist/${NAME}" -- -p [ tsify --noImplicitAny ]
	# npx canvas-sketch src/sketches/${NAME}.ts --build --inline --dir "./dist/${NAME}" -- -p [ tsify --noImplicitAny ]

check:
	npx @biomejs/biome check --write .

serve:
	npx serve dist