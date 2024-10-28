open:
	npx canvas-sketch sketches/${NAME}.ts --open -- -p [ tsify --noImplicitAny ]
	# --html template-ts/page.html

new:
	cp ./template-ts/sketch.ts ./sketches/${NAME}.ts

build:
	npx canvas-sketch sketches/${NAME}.ts --build --inline --dir "./out/${NAME}" -- -p [ tsify --noImplicitAny ]

check:
	npx @biomejs/biome check --write .