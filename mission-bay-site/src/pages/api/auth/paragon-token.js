import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const PARAGON_PROJECT_ID =
  process.env.PARAGON_PROJECT_ID || "4c35906a-b8f0-4fbf-9b85-733a876cd9a5";

function resolveSigningKey() {
  if (process.env.PARAGON_SIGNING_KEY) {
    let key = process.env.PARAGON_SIGNING_KEY;
    key = key.replace(/\\n/g, "\n");
    if (!key.includes("BEGIN")) {
      key = `-----BEGIN PRIVATE KEY-----\n${key}\n-----END PRIVATE KEY-----\n`;
    }
    if (!key.endsWith("\n")) {
      key += "\n";
    }
    return key;
  }

  const candidates = [
    path.join(process.cwd(), "mission-bay-site", "paragon-signing-key.pem"),
    path.join(process.cwd(), "paragon-signing-key.pem"),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate)) {
        let pem = fs.readFileSync(candidate, "utf8");
        if (!pem.endsWith("\n")) {
          pem += "\n";
        }
        return pem;
      }
    } catch (error) {
      console.error(`Unable to read signing key at ${candidate}:`, error);
    }
  }

  throw new Error(
    "Paragon signing key not configured. Set PARAGON_SIGNING_KEY or include paragon-signing-key.pem."
  );
}

export async function GET() {
  try {
    const privateKey = resolveSigningKey();

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      sub: "admin_user",
      email: "testuser@missionbaypuppyrescue.org",
      role: "admin",
      type: "user_session",
      iat: now,
      exp: now + 3600,
    };

    const token = jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      audience: `useparagon.com/${PARAGON_PROJECT_ID}`,
      header: {
        typ: "JWT",
        alg: "RS256",
      },
    });

    return new Response(JSON.stringify({ token, projectId: PARAGON_PROJECT_ID }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating Paragon JWT:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to generate JWT" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
