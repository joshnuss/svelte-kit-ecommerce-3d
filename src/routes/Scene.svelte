<script>
	import { Canvas, T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import Chair from './Chair.svelte';

	export let color
	export let stretcher
</script>

<div>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[1, 4, 10]} rotation.x={-0.3} fov={24}/>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<Chair {color} {stretcher}/>
	</Canvas>
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
