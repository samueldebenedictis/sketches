open:
	npx canvas-sketch sketches/${NAME}.ts --open -- -p [ tsify --noImplicitAny ]

new:
	cp ./template-ts/sketch.ts ./sketches/${NAME}.ts

build:
	npx canvas-sketch sketches/${NAME}.ts --build --dir "./out/${NAME}" -- -p [ tsify --noImplicitAny ]