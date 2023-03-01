import { useRouter } from "next/router";

export default function DrawComponent() {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <div className="draw-component">
      <canvas />
    </div>
  );
}
