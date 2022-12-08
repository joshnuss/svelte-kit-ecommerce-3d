<script>
	import { T } from '@threlte/core';
	export let color;
	export let back;
	export let stretcher = true;
</script>

<!-- Legs -->
<T.Group>
	<!-- Leg #1 -->
	<T.Mesh position.x={-0.75} position.y={1.25} position.z={-0.75} castShadow>
		<T.BoxGeometry args={[0.2, 2.5, 0.2]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Leg #2 -->
	<T.Mesh position.x={1.25} position.y={1.25} position.z={-0.75} castShadow>
		<T.BoxGeometry args={[0.2, 2.5, 0.2]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Leg #3 -->
	<T.Mesh position.x={-0.75} position.y={1.25} position.z={1} castShadow>
		<T.BoxGeometry args={[0.2, 2.5, 0.2]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Leg #4 -->
	<T.Mesh position.x={1.25} position.y={1.25} position.z={1} castShadow>
		<T.BoxGeometry args={[0.2, 2.5, 0.2]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<T.Group rotation.z={0.2} position.x={0.45} position.y={0.3}>
		<!-- Back vertical #1 -->
		<T.Mesh position.x={-0.75} position.y={3.5} position.z={1} castShadow>
			<T.BoxGeometry args={[0.2, 2.25, 0.2]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>

		<!-- Back vertical #2 -->
		<T.Mesh position.x={-0.75} position.y={3.5} position.z={-0.75} castShadow>
			<T.BoxGeometry args={[0.2, 2.25, 0.2]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>

		{#if back == 'four'}
			{#each { length: 4 } as _, n}
				<T.Mesh position.x={-0.75} position.y={3 + n * 0.5} position.z={0.2} castShadow>
					<T.BoxGeometry args={[0.1, 0.25, 1.75]} />
					<T.MeshStandardMaterial {color} />
				</T.Mesh>
			{/each}
		{:else if back == 'six'}
			<T.Mesh position.x={-0.75} position.y={4.5} position.z={0.2} castShadow>
				<T.BoxGeometry args={[0.1, 0.25, 1.75]} />
				<T.MeshStandardMaterial {color} />
			</T.Mesh>

			{#each { length: 4 } as _, n}
				<T.Mesh position.x={-0.75} position.y={3.5} position.z={-0.4 + n * 0.35} castShadow>
					<T.BoxGeometry args={[0.1, 2.25, 0.1]} />
					<T.MeshStandardMaterial {color} />
				</T.Mesh>
			{/each}
		{/if}

		{#if back == 'two' || back == 'two-three'}
			<!-- Back horizontal #1 -->
			<T.Mesh position.x={-0.75} position.y={3.5} position.z={0.2} castShadow>
				<T.BoxGeometry args={[0.1, 0.25, 1.75]} />
				<T.MeshStandardMaterial {color} />
			</T.Mesh>

			<!-- Back horizontal #2 -->
			<T.Mesh position.x={-0.75} position.y={4.5} position.z={0.2} castShadow>
				<T.BoxGeometry args={[0.1, 0.25, 1.75]} />
				<T.MeshStandardMaterial {color} />
			</T.Mesh>

			{#if back == 'two-three'}
				<T.Mesh position.x={-0.75} position.y={4} position.z={0.45} castShadow>
					<T.BoxGeometry args={[0.1, 1, 0.1]} />
					<T.MeshStandardMaterial {color} />
				</T.Mesh>

				<T.Mesh position.x={-0.75} position.y={4} position.z={0.1} castShadow>
					<T.BoxGeometry args={[0.1, 1, 0.1]} />
					<T.MeshStandardMaterial {color} />
				</T.Mesh>

				<T.Mesh position.x={-0.75} position.y={4} position.z={-0.25} castShadow>
					<T.BoxGeometry args={[0.1, 1, 0.1]} />
					<T.MeshStandardMaterial {color} />
				</T.Mesh>
			{/if}
		{/if}
	</T.Group>

	<!-- Seat -->
	<T.Mesh position.x={0.25} position.y={2.5} position.z={0.125} castShadow>
		<T.BoxGeometry args={[2.25, 0.05, 2]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Seat Side #1 -->
	<T.Mesh position.x={0.25} position.y={2.35} position.z={-0.75} castShadow>
		<T.BoxGeometry args={[2, 0.25, 0.1]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Seat Side #2 -->
	<T.Mesh position.x={0.25} position.y={2.35} position.z={1} castShadow>
		<T.BoxGeometry args={[2, 0.25, 0.1]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Seat Side #3 -->
	<T.Mesh position.x={-0.75} position.y={2.35} position.z={0.2} castShadow>
		<T.BoxGeometry args={[0.1, 0.25, 1.8]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	<!-- Seat Side #4 -->
	<T.Mesh position.x={1.25} position.y={2.35} position.z={0.2} castShadow>
		<T.BoxGeometry args={[0.1, 0.25, 1.8]} />
		<T.MeshStandardMaterial {color} />
	</T.Mesh>

	{#if stretcher}
		<T.Mesh position.x={0.25} position.y={1} position.z={1} castShadow>
			<T.BoxGeometry args={[2, 0.15, 0.15]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>

		<T.Mesh position.x={0.25} position.y={1} position.z={-0.75} castShadow>
			<T.BoxGeometry args={[2, 0.15, 0.15]} />
			<T.MeshStandardMaterial {color} />
		</T.Mesh>
	{/if}
</T.Group>
