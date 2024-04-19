import React from 'react';

export const usePlacares = (points) => {
    if (!Array.isArray(points)) {
        return [];
    }

    const groupedPoints = points.reduce((acc, curr) => {
        if (!acc[curr.gameId]) {
            acc[curr.gameId] = [];
        }
        acc[curr.gameId].push(curr.points);
        return acc;
    }, {});

    const gamesIds = Object.keys(groupedPoints).sort();

    const placares = gamesIds.map((gameId) => ({
        gameId,
        points: groupedPoints[gameId][groupedPoints[gameId].length - 1]
    }));

    return placares;
};