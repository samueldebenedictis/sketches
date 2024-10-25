open:
	npx canvas-sketch sketches/${NAME} --open -- -p [ tsify --noImplicitAny ]

new:
	cp ./template-ts/sketch.ts ./sketches/${NAME}.ts  