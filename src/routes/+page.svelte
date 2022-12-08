<script>
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import Chair from './Chair.svelte'
	import Scene from './Scene.svelte'

	const colors = [
		{ name: 'red', value: '#ffee58' },
		{ name: 'blue', value: '#1a237e' },
		{ name: 'black', value: '#222' },
		{ name: 'white', value: '#e1e1e1' },
	]

	let selectedColor = colors[0]
	let stretcher = false

	function selectColor(color) {
		selectedColor = color
	}

	function selectStretcher(enabled) {
		stretcher = enabled
	}
</script>

<aside>
	<h2>Colors</h2>
	<ul class="colors">
		{#each colors as color}
			<li class:selected={color == selectedColor}>
				<button
					style:background-color={color.value}
					on:click={() => selectColor(color)}
					title={color.name}>
				</button>
			</li>
		{/each}
	</ul>

	<h2>Stretcher</h2>
	<ul class="stretcher-options">
		<li class:selected={!stretcher}>
			<button
				on:click={() => selectStretcher(false)}
				title="No stretcher">
				<Scene color={selectedColor.value} stretcher={false}/>
			</button>
		</li>

		<li class:selected={stretcher}>
			<button
				on:click={() => selectStretcher(true)}
				title="Stretcher">
				<Scene color={selectedColor.value} stretcher={true}/>
			</button>
		</li>
	</ul>
</aside>

<main>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[15, 15, 15]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<Chair color={selectedColor.value} {stretcher}/>

		<!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
	</Canvas>
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
	}

	aside {
		position: fixed;
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}

	aside h2 {
		margin: 0;
		padding: 0;
		display: block;
		color: #444;
		font-size: 1rem;
		font-family: Inter, sans;
		font-weight: normal;
	}

	aside ul {
		display: flex;
		list-style: none;
		gap: 0.5rem;
		padding: 0;
	}

	aside button {
		background: none;
		border: solid 1px transparent;
		padding: 0;
		border-radius: 3px;
		width: 50px;
		aspect-ratio: 1;
	}

	aside .selected button {
		border-color: #666;
	}
</style>
