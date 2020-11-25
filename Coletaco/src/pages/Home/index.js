import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { callAPI } from "../../api/api";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    callAPI()
      .then((json) => setData(json.express))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <Text> {data} </Text>}
    </View>
  );
};

export default Home;
