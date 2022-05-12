
class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
}

module.exports = ExplorerService;