import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CircleAlert, Download } from "lucide-react";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index";
import {
  Banner,
  BannerIcon,
  BannerTitle,
} from "@/components/ui/shadcn-io/banner";
import { Socials } from "@/components/socials";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center dark">
      <Banner className="bg-black text-white">
        <BannerIcon icon={CircleAlert} />
        <BannerTitle>
          Beyond is not released currently, please check the discord for more
          information.
        </BannerTitle>
      </Banner>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="shooting-stars-stars-bg absolute inset-0 pointer-events-none" />
      </div>

      <div className="flex h-screen">
        <div className="m-auto">
          <img
            className="w-50 h-50 m-auto"
            src="https://cdn.bynd.lol/Beyond_White.png"
            alt=""
          />

          <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
            Re-Experience OG Fortnite with Beyond
          </h1>
          <br />
          <br />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="link"
                className="bg-black w-40 h-12 hover:bg-blue-400 text-white"
              >
                <Download />
                Download
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Beyond is not released.</AlertDialogTitle>
                <AlertDialogDescription>
                  Beyond is not currently released, please check the discord for
                  more information.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => open("https://discord.gg/ogfn")}
                >
                  Go to Discord
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <br />
          <br />

          <Socials />
        </div>
      </div>

      {/* Sorry i was too lazy.
      https://www.shadcn.io/background/shooting-stars */}
      <ShootingStars
        className="pointer-events-none"
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />

      {/* <div className="flex h-screen">
        <div className="m-auto"></div>
      </div> */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .shooting-stars-stars-bg {
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          pointer-events: none;
          animation: shooting-stars-twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes shooting-stars-twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `,
        }}
      />
    </div>
  );
}
