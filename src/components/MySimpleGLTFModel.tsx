import { useGLTF } from "@react-three/drei";

export function MySimpleGLTFModel({
    modelFilename,
}: {
    modelFilename: string;
}) {
    const { scene } = useGLTF("/" + modelFilename);

    return (
        // <Stage intensity={0.3}>
        <primitive object={scene} rotation={[0, Math.PI / 2, 0]} scale={0.8} />
        // </Stage>
    );
    //TODO: primitives have to be disposed of manually, I think.
}
