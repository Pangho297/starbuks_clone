import { Stack, Typography, colors } from "@mui/material";

export default function TopMenu() {
    return (
        <div className="over ml40 mr40">
            <div className="fl">
                <Stack direction={"row"}>
                    <img src=""></img>
                    <Stack direction={"row"} spacing={1}>
                        <a href="">
                            <Typography>MENU</Typography>
                        </a>
                        <a href="">
                            <Typography>REWARD</Typography>
                        </a> <a href="">
                            <Typography>GIFT CARD</Typography>
                        </a>
                    </Stack>
                </Stack>
            </div>
            <div className="fr">
                <Stack direction={"row"}>
                    <a href="" className="mr40">
                        <Stack direction={"row"}>
                            <img src=""></img>
                            <Typography>
                                Find a store
                            </Typography>
                        </Stack>
                    </a>
                    <Stack direction={"row"}>
                        <button className="roundBtn mr10">
                            Sign in
                        </button>
                        <button className="roundBtn blackBackgroundColor">
                            Join now
                        </button>
                    </Stack>

                </Stack>
            </div>
        </div>)
}