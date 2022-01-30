function isCollided(particle, otherParticle) {
    const dx = Math.abs(particle.x - otherParticle.x);
    const dy = Math.abs(particle.y - otherParticle.y);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= (particle.radius + otherParticle.radius);
}

function rotate(velocity, angle) {
    return {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };
}

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        const angle = -Math.atan2(
            otherParticle.y - particle.y,
            otherParticle.x - particle.x
        );

        // Implement mass for better readability in collision equation
        const m2 = particle.quaziMass;
        const m1 = otherParticle.quaziMass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = {
            x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
            y: u1.y,
        };
        const v2 = {
            x: (u2.x * (m2 - m1)) / (m1 + m2) + (u1.x * 2 * m1) / (m1 + m2),
            y: u2.y,
        };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;

        return [particle.velocity, otherParticle.velocity];
    }
}

//removeIf(production)
module.exports = { isCollided, rotate, resolveCollision };
//endRemoveIf(production)