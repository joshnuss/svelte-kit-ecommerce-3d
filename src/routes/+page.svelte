<script>
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import Chair from './Chair.svelte';
	import Scene from './Scene.svelte';

	const colors = [
		{ name: 'red', value: '#ffee58' },
		{ name: 'blue', value: '#1a237e' },
		{ name: 'black', value: '#222' },
		{ name: 'white', value: '#e1e1e1' }
	];

	const backs = [
		{ name: 'two', path: '/assets/back/two.svg' },
		{ name: 'two-three', path: '/assets/back/two-three.svg' },
		{ name: 'four', path: '/assets/back/four.svg' },
		{ name: 'six', path: '/assets/back/six.svg' }
	];

	let selectedColor = colors[0];
	let selectedBack = backs[0];
	let stretcher = false;
	let loading = false;

	function selectColor(color) {
		selectedColor = color;
	}

	function selectBack(back) {
		selectedBack = back;
	}

	function selectStretcher(enabled) {
		stretcher = enabled;
	}

	async function buy() {
		loading = true;

		const response = await fetch('/checkout', {
			method: 'POST',
			body: JSON.stringify({
				quantity: 1,
				options: {
					color: selectedColor.name,
					back: selectedBack.name,
					stretcher
				}
			})
		});
		const { url } = await response.json();

		window.location.href = url;
	}
</script>

<aside>
	<section>
		<h2>Colors</h2>
		<ul class="colors">
			{#each colors as color}
				<li class:selected={color == selectedColor}>
					<button
						style:background-color={color.value}
						on:click|preventDefault={() => selectColor(color)}
						title={color.name}
					/>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Stretcher</h2>
		<ul class="stretcher-options">
			<li class:selected={!stretcher}>
				<button on:click|preventDefault={() => selectStretcher(false)} title="No stretcher">
					<Scene color={selectedColor.value} stretcher={false} />
				</button>
			</li>

			<li class:selected={stretcher}>
				<button on:click|preventDefault={() => selectStretcher(true)} title="Stretcher">
					<Scene color={selectedColor.value} stretcher={true} />
				</button>
			</li>
		</ul>
	</section>

	<section>
		<h2>Back</h2>
		<ul class="back">
			{#each backs as back}
				<li class:selected={back == selectedBack}>
					<button
						style:color={selectedColor.value}
						on:click|preventDefault={() => selectBack(back)}
						title={back.name}
					>
						<img src={back.path} />
					</button>
				</li>
			{/each}
		</ul>
	</section>
</aside>

<main>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[15, 15, 15]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[5, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<Chair color={selectedColor.value} back={selectedBack.name} {stretcher} />

		<!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
	</Canvas>
</main>

<footer>
	<button on:click={buy} class:loading disabled={loading}>
		{#if loading}
			Loading...
		{:else}
			Buy now
		{/if}
	</button>
</footer>

<style>
	main {
		height: 100vh;
		width: 100vw;
	}

	aside {
		position: fixed;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 1rem;
	}

	aside h2 {
		margin: 0 0 3px 0;
		padding: 0;
		display: block;
		color: #555;
		font-size: 0.8rem;
		font-family: Inter, sans;
		font-weight: normal;
	}

	aside ul {
		display: flex;
		list-style: none;
		gap: 0.5rem;
		padding: 0;
		margin: 0px;
	}

	aside button {
		background: #fffa;
		border: solid 1px transparent;
		padding: 0;
		border-radius: 3px;
		width: 50px;
		aspect-ratio: 1;
	}

	aside .selected button {
		border-color: #ddd;
	}

	footer {
		position: fixed;
		bottom: 0px;
		width: 100vw;
		padding: 1rem;
	}

	footer button {
		background: #6e37ca;
		color: white;
		font-size: 1.3rem;
		border: none;
		border-radius: 3px;
		padding: 1rem;
		width: 100%;
	}

	footer button:hover {
		background: #8460bf;
	}
</style>
