import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInputProps, View } from "react-native";
import SearchIconSVG from "../../pages/SVG/SearchIconSVG";
import BrandTextInput from "../BrandTextInput";
import { useDebounce } from "use-debounce";

const { width } = Dimensions.get('screen');

interface BrandSearchBarProps extends TextInputProps {
    setSearchQuery: (e:string) => void,
}

const BrandSearchBar : React.FC<BrandSearchBarProps> = ({ setSearchQuery, ...props }) => {
    const [ query, setQuery ] = useState<string>("");

    const [ debouncedQuery ] = useDebounce(query, 500);

    const handleTextChange = (e:string) => setQuery(e); 

    const handleDebouncedQuery = useCallback(() => {
        setSearchQuery(debouncedQuery);
    }, [ debouncedQuery ]);

    useEffect(handleDebouncedQuery, [ handleDebouncedQuery ]);

    return (
        <View style={styles.container}>
            <BrandTextInput 
                onChangeText={handleTextChange}
                style={[{ width: width * 0.9, paddingLeft: 40, }]}
                { ...props }
            />
            <View style={styles.iconContainer}>
                <SearchIconSVG width={20}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    iconContainer: {
        position: "absolute",
        top: 22.5,
        left: 10,
    }
});

export default BrandSearchBar;